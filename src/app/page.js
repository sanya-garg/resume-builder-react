import Image from "next/image";
import styles from "./page.module.css";
import Form from "@/components/form";
import Link from "next/link";
import Navbar from "@/components/navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Form />
    </div>
  );
}
