"use client";

import { useState } from "react";
import { Preloader } from "./Preloader";

export const PreloaderManager = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>{isLoading && <Preloader onComplete={() => setIsLoading(false)} />}</>
  );
};
