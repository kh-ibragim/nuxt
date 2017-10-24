export default function ({ store, error }) {
  if (store.state.token == null) {
    error({
      message: 'You are not autorizated',
      statusCode: 401
    })
  }
}
