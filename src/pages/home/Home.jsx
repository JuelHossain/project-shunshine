import ExperiencedJobs from "../../components/experienced-jobs/ExperiencedJobs";
import FreshersJobs from "../../components/freshers-jobs/FreshersJobs";
import Companys from "../../components/top-companys/Companys";
import Banner from "./Banner";

export default function Home() {
  return (
    <div className="flex-1 bg-blue-50">
      <Banner />
      <FreshersJobs />
      <ExperiencedJobs />
      <Companys/>
    </div>
  );
}
