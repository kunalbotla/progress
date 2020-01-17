import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { motion } from "framer-motion"

import Head from "../components/Head"
import GlobalStyles from "../components/GlobalStyles"

import useCalculation from "../hooks/useCalculation"

export default () => {
  const percent = useCalculation()

  const [animateBar, setAnimateBar] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setAnimateBar(true)
    }, 300)
  }, [])

  return (
    <>
      <Head />
      <GlobalStyles />

      <div
        css={css`
          display: grid;
          height: 100vh;

          > * {
            grid-row: 1;
            grid-column: 1;
          }
        `}
      >
        <motion.div
          css={css`
            background-color: var(--accent);
            align-self: end;
          `}
          variants={{
            hidden: {
              height: "0%"
            },
            visible: () => ({
              height: percent + "%"
            })
          }}
          initial="hidden"
          animate={animateBar ? "visible" : "hidden"}
        />

        <motion.h1
          css={css`
            margin: 0;
            font-weight: 800;
            font-size: 10vw;
            justify-self: center;
            align-self: center;
            letter-spacing: -1.5px;
          `}
          variants={{
            hidden: {
              scale: 0
            },
            visible: {
              scale: 1,
              transition: {
                delay: .3
              }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {percent}%
        </motion.h1>
      </div>
    </>
  )
}