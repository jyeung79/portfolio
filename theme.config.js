import Link from "next/link"
const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © Jeffery Yeung
      </small>
      <div />
      <small>
        Credit to <Link href="https://github.com/chronark/chronark.com">@chronark
        </Link>, <Link href="https://github.com/shuding/nextra">@nextra Blog Theme
        </Link>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
