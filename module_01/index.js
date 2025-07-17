import { sum } from "./cals.js";
import findGitHubUser from "./findGitHubUser.js";


let salary = 9000;
let incentive = 2500;

const total = sum(salary, incentive);
// console.log(total);

const user = await findGitHubUser("rajdevyadav");
console.log(user)

