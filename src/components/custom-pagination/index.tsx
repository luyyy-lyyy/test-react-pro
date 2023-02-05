import React from 'react'
// import { Pagination } from 'antd'
// import { IPageInfo } from '@/utils/interface'
import style from './style.module.scss'
interface IPageInfo {
  startPage: number;
  pageSize: number;
  totalCount: number;
  updateCount: number;
}
interface IPaginationProps {
  pageInfo: IPageInfo;
  changePageInfo: (startPage: number, pageSize: number) => void;
}

function CustomPagination (props: IPaginationProps) {
  const { pageInfo, changePageInfo } = props

  const nextChange = () => {
    const {startPage, pageSize} = pageInfo
    console.log(pageInfo.totalCount / pageSize)
    if(Math.floor(pageInfo.totalCount / pageSize) === Math.round(pageInfo.totalCount / pageSize) && startPage ===Math.floor(pageInfo.totalCount / pageSize)){
      return
    }
    if (Math.floor(pageInfo.totalCount / pageSize) <= startPage) return
    changePageInfo(startPage+1, pageSize)
  }

  const preChange = () => {
    const {startPage, pageSize} = pageInfo
    if (startPage === 1) return
    changePageInfo(startPage-1, pageSize)
  }

  // const onShowSizeChange = (current: number, pageSize: number) => {
  //   changePageInfo(current, pageSize)
  // }

  // useEffect(() => {
  //   setNeedUpdate(false)
  //   setTimeout(() => {
  //     setNeedUpdate(true)
  //   }, 100)
  // }, [pageInfo.pageSize])

  return (
    <div>
      {/* {needUpdate &&
      <Pagination
        showQuickJumper
        showSizeChanger={true}
        current={pageInfo.startPage}
        defaultCurrent={pageInfo.startPage}
        defaultPageSize={pageInfo.pageSize}
        total={pageInfo.totalCount}
        showTotal={total => `共 ${total} 条`}
        pageSizeOptions={['2', '5', '10', '20', '50']}
        onChange={onChange}
        onShowSizeChange={onShowSizeChange}
      />
      } */}
      <div className={style.pagination}>
        <div className={style.prePage} onClick={preChange}>
          上一页
        </div>
        <div className={style.pageInfo}>
          {pageInfo.startPage}/{pageInfo.totalCount/pageInfo.pageSize}
        </div>
        <div className={style.nextPage} onClick={nextChange}>
          下一页
        </div>
      </div>
    </div>
  )
}

export default CustomPagination
