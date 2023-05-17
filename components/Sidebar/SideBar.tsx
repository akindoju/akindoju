import { useEffect, useState } from "react";
import styles from "./sidebar.module.scss";
import { motion } from "framer-motion";
import { MyLinks } from "./components/MyLinks";

export const SideBar = () => {
  return <MyLinks />;
};
