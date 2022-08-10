import { useState } from 'react';

export const withErrorApi = View => {

  return props => {
    const [errorApi, setErrorApi] = useState(false);

    return (
      <>
        {errorApi
          ? <h2 style={{ padding: "10px 20px", textAlign: "center", color: 'red' }}>Error</h2>
          :
          (
            <View
              setErrorApi={setErrorApi}
              {...props}
            />
          )
        }
      </>
    )
  }
}