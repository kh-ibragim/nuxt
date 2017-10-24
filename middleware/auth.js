export default function ({ store, error }) {
  if (store.state.token == null) {
    error({
      message: 'Not allowed',
      statusCode: 401
    })
  }
}
