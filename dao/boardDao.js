const appDataSource = require('../models/dataSource')


exports.getBoardList = async () => {
  const getBoardList = await appDataSource.query(`select * from board where delete_state = false`)

  return getBoardList;
}

// 레이어드 패턴 쓰는 이유가 단방향 의존성을 위해서 , 관심사 분리를 위해서 

exports.setBoard = async (title, content) => {
  const setBoard = await appDataSource.query(
    `insert into board(title, content) values(?, ?)`, [title, content]
  )
  return setBoard
}

exports.getBoard = async (id) => {
  const board = await appDataSource.query(
    `select * from board where id = ?`, [id]
  )
  return board
}

exports.updateBoard = async (title, content, id) => {
  const state = await appDataSource.query(
    `update board set title = ?, content = ? where id = ?`, [title, content, id]
  )
  return state
}

exports.deleteBoard = async (id) => {
  const state = await appDataSource.query(
    'update board set delete_state = true where id = ?', [id]
  )
  return state
}