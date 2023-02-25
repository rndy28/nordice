import { IconAlertTriangle } from "@tabler/icons";
import { Button } from "@nordice/core";
import { useNavigate } from "react-router-dom";

const FourOhFour = () => {
  const navigate = useNavigate();

  return (
    <div className="absolute top-2/4 left-2/4 flex w-[95%] max-w-3xl translate-y-[-50%] translate-x-[-50%] flex-col items-center gap-2 text-center">
      <img
        src="/assets/404.svg"
        alt="404 illustration"
        className="h-2/4 w-2/4"
      />
      <div className="flex h-[2rem] w-fit items-center justify-center gap-2 rounded-[5px] bg-[#fef2f2] px-4 text-sm text-[#991b1b]">
        <IconAlertTriangle />
        <span className="font-semibold">404</span>
      </div>
      <h1 className="text-3xl font-medium text-[#434C5E]">Page not Found</h1>
      <p className="max-w-lg text-[#4C566A]">
        Sorry, the page you are looking for doesn&apos;t exist, haven&apos;t been build or
        has been removed. Keep exploring out site:
      </p>
      <Button size="md" onClick={() => navigate(-1)}>
        Go back
      </Button>
    </div>
  );
};

export default FourOhFour;
