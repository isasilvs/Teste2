import Titulo from "@/components/Card/Card";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";




export default function Index(){
    return(
        <>
         <Header/>
        <h2>Bem-vindo à Home!</h2>
        <div>
            <Titulo titulo = "props"/>
        </div>
        <Footer/>


        </>
    )
}