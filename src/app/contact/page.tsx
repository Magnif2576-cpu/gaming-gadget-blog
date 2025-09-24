export default function ContactPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-8 prose">
      <h1>お問い合わせ</h1>
      <p>
        当サイトに関するご意見・ご質問は以下の方法でご連絡ください。
      </p>
      <ul>
        <li>
          メール:{" "}
          <a href="mailto:tt.yoru.1122@gmail.com.com">tt.yoru.1122@gmail.com</a>
        </li>
        <li>
          Googleフォーム:{" "}
          <a href="https://forms.gle/zjRjQKMdH1qohGA47" target="_blank" rel="noopener noreferrer">
            こちらから送信
          </a>
        </li>
      </ul>
    </main>
  );
}
