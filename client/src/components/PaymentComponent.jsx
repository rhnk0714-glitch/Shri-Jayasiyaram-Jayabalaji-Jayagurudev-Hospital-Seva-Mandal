import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import upiQR from "../imgs/qr.jpg"; // Place your QR image in src/imgs/

export default function PaymentComponent() {
  const { t } = useTranslation();
  const [amount, setAmount] = useState("");
  const [donorName, setDonorName] = useState("");
  const [donorEmail, setDonorEmail] = useState("");
  const [donorPhone, setDonorPhone] = useState("");
  const [donorAddress, setDonorAddress] = useState("");
  const [donorPan, setDonorPan] = useState("");
  const [notes, setNotes] = useState("");
  const [showPayment, setShowPayment] = useState(false);
  const customInputRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [isOther, setIsOther] = useState(false);
  const [loading, setLoading] = useState(false);

  const upiId = "9328476989@upi"; // your static UPI ID
  const quickAmounts = [100, 500, 1000, 2000, 5000, " Other"];

  const handleQuickAmount = (amt) => {
    if (amt === " Other") {
      setIsOther(true);
      setAmount("");
      setTimeout(() => customInputRef.current?.focus(), 0);
    } else {
      setIsOther(false);
      setAmount(amt.toString());
    }
  };

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy UPI ID", err);
    }
  };

  const handleDonate = async () => {
    if (!amount || !donorName || !donorPhone || !donorAddress) {
      alert("Please fill in amount, name, phone number and your Address");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch("http://localhost:5555/api/donations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          donorName,
          donorEmail,
          donorPhone,
          donorAddress,
          donorPan,
          amount,
          notes,
        }),
      });

      const data = await res.json();
      if (res.ok) {
        console.log("✅ Donation saved:", data);
        setShowPayment(true);
      } else {
        alert(data.message || "Error saving donation");
      }
    } catch (err) {
      console.error("❌ Error submitting donation:", err);
      alert("Server error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (showPayment) {
    return (
      <div className="card" style={{ textAlign: "center" }}>
        <h3>{t("donate.greet")}  {donorName}!</h3>
        <p>
        {t("donate.request")}
        </p>

        <img
          src={upiQR}
          alt="UPI QR Code"
          style={{ width: "220px", margin: "10px auto" }}
        />

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
          {copied ? " UPI ID Copied!" : upiId}
        </p>

        <p>
          <strong>{t("donate.amt")}: </strong> ₹{amount}
        </p>

        <button
          className="control-ghost"
          onClick={() => setShowPayment(false)}
          style={{ marginTop: "12px" }}
        >
          Back
        </button>
      </div>
    );
  }

  return (
    <div className="card">
      <h3 style={{ marginTop: 0 }}>{t("donate.online_heading")}</h3>
      <p>{t("donate.online_info")}</p>

      {/* Quick amount buttons */}
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}
        >
          {t("donate.quick_amounts")}
        </label>
        <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
          {quickAmounts.map((amt) => (
            <button
              key={amt}
              type="button"
              className={
                amount === amt.toString() || (amt === " Other" && isOther)
                  ? "control-btn"
                  : "control-ghost"
              }
              onClick={() => handleQuickAmount(amt)}
              style={{ minWidth: "80px" }}
            >
              {amt === " Other" ? "Other" : `₹${amt}`}
            </button>
          ))}
        </div>
      </div>

      {/* Custom amount input */}
      <div style={{ marginBottom: "16px" }}>
        <label
          style={{ display: "block", marginBottom: "8px", fontWeight: 600 }}
        >
          {t("donate.amount_label")}
        </label>
        <input
          type="number"
          className="input"
          placeholder={t("donate.custom_amount")}
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          min="1"
          style={{ width: "100%" }}
          ref={customInputRef}
        />
      </div>

      {/* Donor details */}
      <div
        className="grid grid-2"
        style={{ gap: "16px", marginBottom: "16px" }}
      >
        <input
          type="text"
          className="input"
          placeholder={t("donate.donor_name")}
          value={donorName}
          onChange={(e) => setDonorName(e.target.value)}
          required
        />
        <input
          type="email"
          className="input"
          placeholder={t("donate.donor_email")}
          value={donorEmail}
          onChange={(e) => setDonorEmail(e.target.value)}
        />
        <input
          type="tel"
          className="input"
          placeholder={t("donate.donor_phone")}
          value={donorPhone}
          onChange={(e) => setDonorPhone(e.target.value)}
          required
        />
        <input
          type="text"
          className="input"
          placeholder={t("donate.donation_purpose")}
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
        <input
          type="text"
          className="input"
          placeholder={t("donate.donor_pan")}
          value={donorPan}
          onChange={(e) => setDonorPan(e.target.value)}
        />
        <textarea
          type="text"
          name="address"
          id="donor_add"
          className="input"
          placeholder={t("donate.donor_address")}
          value={donorAddress}
          onChange={(e) => setDonorAddress(e.target.value)}
          required
        ></textarea>
      </div>

      {/* Donate button */}
      <div
        style={{
          display: "flex",
          gap: "12px",
          alignItems: "center",
          marginBottom: "16px",
        }}
      >
        <button
          className="control-btn"
          onClick={handleDonate}
          style={{ minWidth: "150px" }}
          disabled={loading}
        >
          {loading ? "Saving..." : `${t("donate.donate_button")} ₹${amount || "0"}`}
        </button>
      </div>
    </div>
  );
}
