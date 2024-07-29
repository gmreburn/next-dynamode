import Table, { tableManager, TableProps } from "./table";
import attribute from "dynamode/decorators";

export interface UserProps extends Omit<TableProps, "pk"> {
  id: string;
}

export class User extends Table {
  @attribute.partitionKey.string({ prefix: "USER#" })
  id: string;

  constructor(props: UserProps) {
    super({
      pk: props.id,
    });

    this.id = props.id;
  }
}

export const UserManager = tableManager.entityManager();
