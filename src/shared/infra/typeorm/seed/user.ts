import { hash } from "bcrypt"
import { v4 as uuidV4 } from "uuid"

import createConnection from "../index"

async function create() {
    const connection = await createConnection();

    const id = uuidV4();
    const password = await hash("user123", 8);

    await connection.query(
       `INSERT INTO USERS(id, name, email, password, created_at)
         VALUES('${id}', 'user', 'user@email.com.br', '${password}', 'now()')
       `
    );

    await connection.close;
}

create().then(() => console.log("User created!")).catch((err) => {
    console.log("err: ", err);

})

