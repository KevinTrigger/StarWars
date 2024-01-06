import cl from './PageLoader.module.scss'

const PageLoader = () => {
  return (
    <div className={cl.wrapper}>
      <span className={cl.loader}></span>
    </div>
  )
}

export default PageLoader