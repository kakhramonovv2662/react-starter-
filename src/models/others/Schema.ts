import { IShape_value, shapeType } from "../types";
import { bool, number, object, string } from "yup";

export class MainSchema {
  shape = {};
  // sv = shape_value
  sv: IShape_value[];
  // sk = shape_keys
  sk: string[];
  constructor(shape: shapeType) {
    this.sv = shape?.shape_values;
    this.sk = shape?.shape_keys;
  }

  private renderShapeKeys() {
    if (this.sk?.length === this.sv?.length) {
      let shape = {};
      for (let i = 0; i < this.sk.length; i++) {
        const o = {
          [this.sk[i]]: this.rShape(this.sv[i]),
        };
        shape = { ...shape, ...o };
      }
      return (this.shape = shape);
    } else {
      throw new Error(
        "Error: The length of the shape_keys and the shape_values must be equal"
      );
    }
  }

  private rShape(value: IShape_value) {
    if (value?.type === "string") return this.rStringShape(value);
    else if (value?.type === "number") return this.rNumberShape(value);
    else if (value?.type === "boolean") return this.rBooleanShape(value);
    else throw new Error("TypeError: This type is not suitable");
  }

  private rStringShape(sv: IShape_value) {
    let shape = string();
    if (sv?.min) shape = shape.min(sv?.min?.number, sv?.min?.message);
    if (sv?.max) shape = shape.max(sv?.max?.number, sv?.max?.message);
    if (sv?.email) shape = shape.email(sv?.email);
    if (sv?.matches)
      shape = shape.matches(sv?.matches?.exp, sv?.matches?.message);
    if (sv?.required) shape = shape.required(sv?.required);
    return shape;
  }

  private rNumberShape(sv: IShape_value) {
    let shape = number();
    if (sv?.min) shape = shape.min(sv?.min?.number, sv?.min?.message);
    if (sv?.max) shape = shape.max(sv?.max?.number, sv?.max?.message);
    if (sv?.required) shape = shape.required(sv?.required);
    return shape;
  }

  private rBooleanShape(sv: IShape_value) {
    let shape = bool();
    if (sv?.required) shape = shape.required(sv?.required);
    return shape;
  }

  get getShape() {
    this.renderShapeKeys();
    if (this.shape) return object().shape({ ...this.shape });
  }
}
