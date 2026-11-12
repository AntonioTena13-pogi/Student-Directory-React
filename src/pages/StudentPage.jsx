
import FormContainer from "../Component/FormContainer";
import HeaderContainer from "../Component/HeaderContainer";
import Section from "../Component/Section";
import { useData } from "../hooks/useData";

const StudentPage = () => {
    
        const [data, setData] = useData([]);

    const getData = async () => {
        const response = await fetch('http://127.0.0.1:3000/student/');

        if(!response.ok){
            throw new Error(response.status);
        }  

        const data = response.json();

        return data;
    }

        getData().then((result) =>{
            setData(result);
        }).catch((e) => {
            console.log(e);
        })

    return (
        <>
            <FormContainer />
            <HeaderContainer />
            <Section data={data} />
        </>
    );
};

export default StudentPage;
