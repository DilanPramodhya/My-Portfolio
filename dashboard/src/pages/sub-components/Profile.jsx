import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useSelector } from "react-redux";

const Profile = () => {
  const { user } = useSelector((state) => state.user);
  return (
    <>
      <div className="w-full h-full">
        <div>
          <div className="grid w-[100%] gap-6">
            <div className="grid gap-2">
              <h1 className="text-3xl font-bold">Profile</h1>
              <p className="mb-5">Full profile preview</p>
            </div>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center lg:justify-between lg:items-center flex-col lg:flex-row gap-5">
              <div className="grid gap-4 w-full sm:w-72">
                <Label>Profile Image</Label>
                <img
                  src={user && user.avatar && user.avatar.url}
                  alt="avatar"
                />
              </div>
              <div className="grid gap-4 w-full sm:w-72">
                <Label>Resume</Label>
                <img
                  src={user && user.resume && user.resume.url}
                  alt="resume"
                />
              </div>
            </div>
            <div className="grid gap-2">
              <Label>Full Name</Label>
              <Input type="text" defaultValue={user.fullName} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Email</Label>
              <Input type="email" defaultValue={user.email} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Phone</Label>
              <Input type="text" defaultValue={user.phone} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>About me</Label>
              <Textarea defaultValue={user.aboutMe} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Portfolio URL</Label>
              <Input defaultValue={user.portfolioURL} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Github URL</Label>
              <Input defaultValue={user.githubURL} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Instagram URL</Label>
              <Input defaultValue={user.instagramURL} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Facebook URL</Label>
              <Input defaultValue={user.facebookURL} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>Twitter URL</Label>
              <Input defaultValue={user.twitterURL} disabled/>
            </div>
            <div className="grid gap-2">
              <Label>LinkedIn URL</Label>
              <Input defaultValue={user.linkedInURL} disabled/>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
