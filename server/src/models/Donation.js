import mongoose from "mongoose";

const DonationSchema = new mongoose.Schema(
  {
    donorName: { type: String, required: true },
    donorEmail: { type: String },
    donorPhone: { type: Number, required:true },
    donorAddress: {type:String, required:true},
    donorPan: { type: String },
    amount: { type: Number, required: true },
    notes: { type: String },
    status: { type: String, enum: ['created', 'paid', 'failed'], default: 'created' }
  },
  { timestamps: true }
);

export default mongoose.model("Donation", DonationSchema);
