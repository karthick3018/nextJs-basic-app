import dynamic from "next/dynamic";

const ContentWithImg = dynamic(()=>import("../components/withImg"),{ loading: () => <p>Loading...</p>});


const page1 = () => (
  <>
  <p>Hey routing to page1</p>
  <ContentWithImg/>
  </>
)



export default page1;