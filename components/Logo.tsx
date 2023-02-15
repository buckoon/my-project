
import React from 'react'
import Image from 'next/image'


function Logo(props: any) {
  const {renderDefault, title } = props;

  return (
    <div className="flex items-center justify-center">
            <Image
              className="rounded-full"
              src="https://avatars.githubusercontent.com/u/86854746?v=4"
              width={50}
              height={50}
              alt="Picture of Jeremy"
            />
            {/* {renderDefault && <>{props.renderDefault(props)}</>} */}
          </div>
  )
}

export default Logo