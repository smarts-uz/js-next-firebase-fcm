"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Bell, AlertCircle, Send, Loader } from "lucide-react";
import {
  initializeFirebase,
  requestNotificationPermission,
  getFirebaseToken,
  sendPushNotification,
  sendNotificationToTopic,
} from "@/lib/firebase";
import { NotificationTopicManager } from "./NotificationTopicManager";

export default function PushNotificationManager() {
  const [permission, setPermission] =
    useState<NotificationPermission>("default");
  const [token, setToken] = useState<string | null>(null);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    const initializeNotifications = async () => {
      try {
        await initializeFirebase();
        const currentPermission = await requestNotificationPermission();
        setPermission(currentPermission);

        if (currentPermission === "granted") {
          const fcmToken = await getFirebaseToken();
          console.log("client-Token", fcmToken);
          setToken(fcmToken);
        }
      } catch (error) {
        console.log(error);
        console.error("Error initializing notifications:", error);
        setError("Failed to initialize notifications. Please try again.");
      }
    };

    initializeNotifications();
  }, []);

  const handleRequestPermission = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      const newPermission = await requestNotificationPermission();
      setPermission(newPermission);

      if (newPermission === "granted") {
        const fcmToken = await getFirebaseToken();
        setToken(fcmToken);
        setSuccess("Notification permission granted!");
      } else {
        setError(
          "Permission denied. Please enable notifications in your browser settings."
        );
      }
    } catch (error) {
      console.error("Error requesting notification permission:", error);
      setError("Failed to request notification permission. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSendNotification = async () => {
    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      if (topic) {
        await sendNotificationToTopic(topic, title, body);
        setSuccess(`Notification sent to topic: ${topic}`);
      } else if (token) {
        await sendPushNotification(token, title, body);
        setSuccess("Notification sent successfully!");
      } else {
        throw new Error("No token or topic specified");
      }
      setTitle("");
      setBody("");
      setTopic("");
    } catch (error) {
      console.error("Error sending notification:", error);
      setError("Failed to send notification. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="shadow-lg">
      <CardHeader>
        <CardTitle className="text-center text-xl font-semibold">
          Push Notifications
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive" className="flex items-center">
            <AlertCircle className="h-5 w-5 mr-2 text-red-500" />
            <div>
              <AlertTitle className="font-bold">Error</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </div>
          </Alert>
        )}

        {success && (
          <Alert
            variant="success"
            className="flex items-center bg-green-950 text-green-200 border-green-200"
          >
            <AlertCircle className="h-5 w-5 mr-2 text-green-500" />
            <div>
              <AlertTitle className="font-bold">Success</AlertTitle>
              <AlertDescription>{success}</AlertDescription>
            </div>
          </Alert>
        )}

        {permission !== "granted" && (
          <Button
            onClick={handleRequestPermission}
            disabled={loading}
            className="w-full"
          >
            {loading ? (
              <Loader className="animate-spin mr-2 h-4 w-4" />
            ) : (
              <Bell className="mr-2 h-4 w-4" />
            )}
            Request Notification Permission
          </Button>
        )}

        {permission === "granted" && token && (
          <div className="space-y-4">
            <NotificationTopicManager token={token} />
            <div className="space-y-2">
              <Input
                placeholder="Notification Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Notification Body"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                rows={3}
              />
            </div>
            <div className="space-y-2">
              <Input
                placeholder="Topic (optional)"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              />
            </div>
            <Button
              onClick={handleSendNotification}
              disabled={loading || !title || !body}
              className="w-full"
            >
              {loading ? (
                <Loader className="animate-spin mr-2 h-4 w-4" />
              ) : (
                <Send className="mr-2 h-4 w-4" />
              )}
              Send Notification
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
