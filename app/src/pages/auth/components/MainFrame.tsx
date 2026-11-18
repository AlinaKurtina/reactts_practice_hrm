import Gradient from "@/components/common/Gradient";
import MainIcon from "./MainIcon";
import dots1 from "@/assets/vectors/dots1.svg";
import dots2 from "@/assets/vectors/dots2.svg";
import { BookOpen, Brain, ChartLine, UsersRound } from "lucide-react";
import Wrapper from "@/components/common/Wrapper";

function MainFrame() {
  return (
    <Wrapper className="bg-(--brand-red) justify-center items-center min-w-2/4">
      <div className="flex flex-col h-dvh w-full relative">
        <Gradient className="from-(--grad-red)" />
        <img src={dots1} alt="decor" className="z-2 w-50 ml-auto mt-3.5" />
        <ul className="flex items-center justify-center gap-5 z-2 mt-auto mb-8">
          <li>
            <MainIcon>
              <Brain size={32} color="#ffffff" />
            </MainIcon>
          </li>
          <li>
            <MainIcon>
              <BookOpen size={32} color="#ffffff" />
            </MainIcon>
          </li>
          <li>
            <MainIcon>
              <ChartLine size={32} color="#ffffff" />
            </MainIcon>
          </li>
          <li>
            <MainIcon>
              <UsersRound size={32} color="#ffffff" />
            </MainIcon>
          </li>
        </ul>
        <div className="flex flex-col items-center z-2 text-(--main-white) gap-5">
          <h4 className="font-head font-bold text-2xl">Innowise LMS</h4>
          <ul className="flex flex-col gap-3 font-secondary items-center text-m max-w-55 text-center">
            <li>Smart Learning, Smart Development</li>●<li>Unlock Knowledge, Embrace Success</li>●
            <li>Together We Learn, Together We Grow</li>●
            <li>Growth of Skills, Growth of Opportunities</li>
          </ul>
        </div>
        <img src={dots2} alt="decor" className="size-25 ml-5 mt-auto" />
      </div>
    </Wrapper>
  );
}

export default MainFrame;
