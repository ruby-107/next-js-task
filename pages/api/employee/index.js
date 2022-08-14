
import nc from "next-connect";
import { getEmployee, createEmployee} from "../../../controller/employee/employee";

const handler=nc();
handler.get(getEmployee)
handler.post(createEmployee)
export default handler;

