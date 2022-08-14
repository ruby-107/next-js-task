
import nc from "next-connect";
import { getEmployeeId,deleteEmployeeId ,updateEmployee} from "../../../controller/employee/employee";

const handler=nc();
handler.get(getEmployeeId)
handler.delete(deleteEmployeeId)
handler.put(updateEmployee)
export default handler;

