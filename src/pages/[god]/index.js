import ButtonBase from "../../components/button";
import { useRouter } from "next/router";
export async function getStaticPaths() {
  // Get the paths we want to pre-render based on posts
  return {
    paths: [],
    fallback: "blocking",
  };
}
export async function getStaticProps({ params: { god } }) {
  return {
    props: { god },
  };
}
export default function God({ god }) {
  const router = useRouter();
  const Button = ButtonBase[god];
  console.log(Button);
  return (
    <div>
      <Button></Button>
    </div>
  );
}
