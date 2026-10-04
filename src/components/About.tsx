const h2Class = 'text-xl font-medium text-green-500 mt-12 first:mt-0'
const pClass = 'mt-4'
const aClass = 'font-medium text-cyan-400 hover:text-cyan-300'

export default function About() {
  return (
    <>
      <h2 className={h2Class}>About/Credits</h2>
      <p className={pClass}>
        Project forked from Johan Li's work.{' '}
        <a href="mailto:hi@johan.li" className={aClass}>
          hi@johan.li
        </a>
        <br />
        Github: https://github.com/JohanLi
        <br />
        Website: https://johan.li/
      </p>
    </>
  )
}
