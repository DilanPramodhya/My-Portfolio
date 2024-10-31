import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  clearAllSkillErrors,
  deleteSkill,
  getAllSkills,
  resetSkillSlice,
  updateSkill,
} from "@/store/slices/skillSlice";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageSkills = () => {
  const { loading, skills, error, message } = useSelector(
    (state) => state.skill
  );
  const dispatch = useDispatch();

  const [newProficiency, setNewProficiency] = useState(1);

  const handleInputChange = (proficiency) => {
    setNewProficiency(proficiency);
  };

  const handleUpdateSkill = (id) => {
    dispatch(updateSkill(id, newProficiency));
  };

  const handleDeleteSkill = (id) => {
    dispatch(deleteSkill(id));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearAllSkillErrors());
    }
    if (message) {
      toast.success(message);
      dispatch(resetSkillSlice());
      dispatch(getAllSkills());
    }
  }, [dispatch, loading, error, message]);
  return (
    <>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <Tabs>
          <TabsContent>
            <Card>
              <CardHeader className="flex gap-4 sm:justify-between sm:flex-row sm:items-center  ">
                <CardTitle className="text-4xl text-blue-600">
                  Manage Your Skills
                </CardTitle>
                <Link to={"/"}>
                  <Button className="w-fit">Return To Dashboard</Button>
                </Link>
              </CardHeader>
              <CardContent className="grid sm:grid-cols-2 gap-4">
                {skills && skills.length > 0 ? (
                  skills.map((element) => {
                    return (
                      <Card key={element._id}>
                        <CardHeader className="text-3xl font-bold items-center justify-between flex-row">
                          {element.title}
                          <TooltipProvider>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Trash2
                                  onClick={() => handleDeleteSkill(element._id)}
                                  className="h-6 w-6 hover:text-red-600"
                                />
                              </TooltipTrigger>
                              <TooltipContent
                                side="top"
                                style={{ color: "red" }}
                              >
                                Delete
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </CardHeader>
                        <CardFooter>
                          <Label className="text-2xl mr-2">Proficiency</Label>
                          <Input
                            type="number"
                            defaultValue={element.proficiency}
                            onChange={(e) => handleInputChange(e.target.value)}
                            onBlur={() => handleUpdateSkill(element._id)}
                          />
                          {/* <Button
                            className="ml-4"
                            onClick={() => handleUpdateSkill(element._id)}
                          >
                            Update
                          </Button> */}
                        </CardFooter>
                      </Card>
                    );
                  })
                ) : (
                  <CardTitle className="text-3xl font-bold text-center overflow-hidden">
                    You Have Not Added Any Skill
                  </CardTitle>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </>
  );
};

export default ManageSkills;
