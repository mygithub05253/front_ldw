import got from "got";

const tossPayment = (req, res) => {

  const { paymentKey, orderId, amount } = req.body;
  const secretKey = "test_gsk_docs_OaPz8L5KdmQXkzRz3y47BMw6";
  const encryptedSecretKey =
  'Basic ' + Buffer.from(secretKey + ':').toString('base64');

  got.post("https://api.tosspayments.com/v1/payments/confirm", {
    method: 'POST',
    headers: {
      Authorization: encryptedSecretKey,
      'Content-Type': 'application/json',
    },
    json: { orderId, amount, paymentKey },
    responseType : "json",
  })
  .then(async (res) => {
    // 결제 성공했을 때 로직 작성
    console.log(res.body)
  })
  .catch((error) => {
    // 실패 로직
  })
}

export { tossPayment }