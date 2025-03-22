import { Suspense } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  MapPin,
  Database,
  Wifi,
  Link,
  Bell,
  Smartphone,
} from "lucide-react";

export default function Home() {
  return (
    <main className="container mx-auto p-4 ">
      <div className="flex flex-col items-center justify-center mb-8 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Firebase FCM Example</h1>
        <p className="text-muted-foreground mb-4">
          A comprehensive guide to using Firebase Cloud Messaging in JavaScript
          applications.
        </p>
      </div>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle>Firebase Cloud Messaging (FCM) with JavaScript</CardTitle>
          <CardDescription>
            Learn how to integrate and use Firebase Cloud Messaging in your
            JavaScript applications.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex items-start space-x-4">
            <FileText className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">
                Send Messages with Firebase Console
              </h3>
              <p className="text-sm text-muted-foreground">
                Use the Firebase console to send messages directly to your
                application users. This allows for targeted messaging and user
                engagement.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <MapPin className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Topics on Web JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Subscribe users to topics to send messages to multiple devices
                at once. This is useful for broadcasting messages to a large
                audience.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Database className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Device Groups on Web JavaScript</h3>
              <p className="text-sm text-muted-foreground">
                Group devices under a single notification key to send messages
                to all devices in the group, ensuring consistent communication.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Link className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Backgrounded App</h3>
              <p className="text-sm text-muted-foreground">
                Handle messages when your app is in the background using service
                workers, allowing for seamless user experience.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Smartphone className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">
                Receive Messages in JavaScript Client
              </h3>
              <p className="text-sm text-muted-foreground">
                Implement message handlers to receive and process messages in
                your web app, enhancing interactivity and engagement.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Bell className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Manage Topics from Server</h3>
              <p className="text-sm text-muted-foreground">
                Use the FCM server API to manage topic subscriptions
                programmatically, providing flexibility in message distribution.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Wifi className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Build App Server Send Requests</h3>
              <p className="text-sm text-muted-foreground">
                Construct and send messages from your app server using the FCM
                API, enabling automated and scalable communication.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <Link className="h-6 w-6 flex-shrink-0 mt-1" />
            <div>
              <h3 className="font-medium">Authorize Send Requests</h3>
              <p className="text-sm text-muted-foreground">
                Secure your send requests with appropriate authentication
                methods, ensuring that only authorized messages are sent.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
