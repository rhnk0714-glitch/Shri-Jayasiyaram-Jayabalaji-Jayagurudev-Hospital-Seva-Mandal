import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import upiQR from "../imgs/qr.jpg"; 

export default function PaymentComponent() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  // Static UPI ID
  const upiId = "9328476989@upi";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy UPI ID", err);
    }
  };

  return (
    <div className="srv" style={{ textAlign: "center" }}>
      <h3>{t("donate.online_heading")}</h3>
      <p>{t("donate.online_info")}</p>

      {/* Static QR Code */}
      <img
        src={upiQR}
        alt="UPI QR Code"
        style={{ width: "220px", margin: "10px auto" }}
      />

      {/* Static UPI ID */}
      <p
        onClick={handleCopy}
        style={{
          fontWeight: 600,
          fontSize: "18px",
          color: copied ? "white" : "#ff9800",
          cursor: "pointer",
          userSelect: "none",
        }}
      >
        {copied ? "UPI ID Copied!" : upiId}
      </p>
    </div>
  );
}
