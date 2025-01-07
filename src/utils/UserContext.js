import { createContext, useEffect } from "react";

const UserContext = createContext({ loggedIn: "default user" });

export default UserContext;
