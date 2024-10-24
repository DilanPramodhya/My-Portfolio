import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingButton from "./LoadingButton";
import {
  clearAllMessageErrors,
  deleteMessage,
  getAllMessages,
  resetMessageSlice,
} from "@/store/slices/messagesSlice";
import { toast } from "react-toastify";

const Messages = () => {
  const { messages, loading, error, message } = useSelector(
    (state) => state.messages
  );

  const [messageId, setMessageId] = useState("");

  const navigateTo = useNavigate();
  const dispatch = useDispatch();

  const handleReturnToDashboard = () => {
    navigateTo("/");
  };

  const handleMessageDelete = (id) => {
    setMessageId(id);
    dispatch(deleteMessage(id));
  };

  useEffect(() => {
    console.log("Message state on render:", message); // This will log even if message is undefined or null

    if (error) {
      toast.error(error);
      dispatch(clearAllMessageErrors());
      console.log("Error:", error);
    }

    if (message) {
      toast.success(message);
      dispatch(resetMessageSlice());
      dispatch(getAllMessages());
      console.log("Success message:", message);
    } else {
      console.log("No message or message reset");
    }
  }, [dispatch, error, message, loading]);

  return (
    <>
      <div className="min-h-[100vh] sm:gap-4 sm:py-4 sm:pl-20">
        <Tabs>
          <TabsContent>
            <Card>
              <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center">
                <CardTitle>Messages</CardTitle>
                <Button className="w-fit" onClick={handleReturnToDashboard}>
                  Return to Dashboard
                </Button>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                {messages && messages.length > 0 ? (
                  messages.map((element) => {
                    return (
                      <Card key={element._id} className="grid gap-2">
                        <CardDescription className="text-slate-950 ml-4 mt-4">
                          <span className="font-bold mr-2">Sender Name:</span>
                          {element.senderName}
                        </CardDescription>
                        <CardDescription className="text-slate-950 ml-4">
                          <span className="font-bold mr-2">Subject:</span>
                          {element.subject}
                        </CardDescription>
                        <CardDescription className="text-slate-950 ml-4">
                          <span className="font-bold mr-2">Message:</span>
                          {element.message}
                        </CardDescription>
                        <CardFooter className="justify-end">
                          {loading && messageId === element._id ? (
                            <LoadingButton
                              width={"w-32"}
                              content={"Deleting...."}
                            />
                          ) : (
                            <Button
                              className="w-32 bg-red-600 mt-2 hover:bg-red-800"
                              onClick={() => handleMessageDelete(element._id)}
                            >
                              Delete
                            </Button>
                          )}
                        </CardFooter>
                      </Card>
                    );
                  })
                ) : (
                  <CardHeader>No Messages Found</CardHeader>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default Messages;
