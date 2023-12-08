import { PaymentManager } from "../managers/PaymentManager"; // Adjust paths based on your structure.
import { NetBankingPaymentManager } from "../managers/NetBankingPaymentManager";
import { CardBasedPaymentManager } from "../managers/CardBasedPaymentManager";

export class PaymentManagerFactory {
  private constructor() {}

  public static getPaymentManager(
    paymentMode: string,
    paymentInfo: Map<string, string>
  ): PaymentManager {
    let paymentManager: PaymentManager | null = null;
    if (paymentMode === "NetBanking") {
      paymentManager = this.getNetBankingPaymentManager(paymentInfo);
    } else if (paymentMode === "CardBased") {
      paymentManager = this.getCardBasedPaymentManager(paymentInfo);
    } else {
      throw new Error("Invalid paymentMode");
    }
    return paymentManager;
  }

  private static getNetBankingPaymentManager(
    paymentInfo: Map<string, string>
  ): PaymentManager {
    return new NetBankingPaymentManager(
      paymentInfo.get("bankName") || "",
      paymentInfo.get("userName") || "",
      paymentInfo.get("passWord") || "",
      paymentInfo.get("pin") || "",
      parseFloat(paymentInfo.get("amount") || "0")
    );
  }

  private static getCardBasedPaymentManager(
    paymentInfo: Map<string, string>
  ): PaymentManager {
    return new CardBasedPaymentManager(
      paymentInfo.get("bankName") || "",
      paymentInfo.get("cardNumber") || "",
      paymentInfo.get("pin") || "",
      parseFloat(paymentInfo.get("amount") || "0")
    );
  }
}
