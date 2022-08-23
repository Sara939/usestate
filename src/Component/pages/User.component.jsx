import Adduser from "./add-user.component"
import Userupdate from "./userupdate.componemt"
export default function User(){


    return(
    <div>
    <Adduser/>
    <Userupdate fnameof="sars" lnameof="lik" ageof={30} emailof="sgdg"/>
    </div>
)
} 
