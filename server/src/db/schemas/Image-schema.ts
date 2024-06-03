import { Schema } from "mongoose";
import { IImage } from "../../interfaces/User";
const imageSchema = new Schema<IImage>({
url: { type: String, required: true, minlength: 2, maxlength: 20 },
alt: { type: String, required: true, minlength: 2, maxlength: 20 },
});
export default imageSchema;