import { createContext } from "react";
import { PlatformType } from "../../Definitions/types";

const PlatformContext = createContext<PlatformType>({web: false, iOS: false, android: false})

export default PlatformContext;