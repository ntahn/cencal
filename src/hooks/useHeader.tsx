import { useEffect } from "react";
import { useAppDispatch } from "@/store/hooks";
import { setHeader } from "@/store/features/header/headerSlice";

interface UseHeaderProps {
  title?: string;
  showBackButton?: boolean;
  backUrl?: string;
}

export const useHeader = ({
  title,
  showBackButton,
  backUrl,
}: UseHeaderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      setHeader({
        title,
        showBackButton,
        backUrl,
      })
    );

    return () => {
      dispatch(
        setHeader({
          title: "",
          showBackButton: false,
          backUrl: "",
        })
      );
    };
  }, [backUrl, dispatch, showBackButton, title]);
};
