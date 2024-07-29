import Entity from "dynamode/entity";
import attribute from "dynamode/decorators";
import TableManager from "dynamode/table";
import Dynamode from "dynamode/dynamode";
Dynamode.ddb.local();

export interface TableProps {
  pk: string;
}

export default class Table extends Entity {
  @attribute.partitionKey.string()
  pk: string;

  constructor({ pk }: TableProps) {
    super();
    this.pk = pk;
  }
}

const TABLE_NAME = "TABLE_NAME";

export const tableManager = new TableManager(Table, {
  tableName: TABLE_NAME,
  partitionKey: "pk",
});

tableManager.validateTable().catch(async (err) => {
  await tableManager.createTable();
});
