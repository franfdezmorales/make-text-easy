import { useReducer, useState } from 'react'
import type { ChangeEvent } from 'react';
import type { GetStaticPropsContext } from 'next';
import styles from '@styles/Home.module.css'
import Head from 'next/head'
import Header from '@components/Header'
import TextArea from '@components/TextArea'
import Button from '@components/Button'
import Input from '@components/Input'
import RightArrow from '@components/Icons/RightArrow';
import { useTranslations } from 'next-intl';

type Actions = 'MODIFY_TEXT_TO_TRANSFORM' | 'MODIFY_INSTRUCTIONS' | 'MODIFY_TEXT_TRANSFORMED'

interface States {
  textToTransform: string, 
  instructions: string, 
  textTransformed: string,
}

interface Action {
  type: Actions, 
  payload: string
}


function reducer(states: States, action: Action): States {
  const { type, payload } = action;
  switch(type) {
    case 'MODIFY_TEXT_TO_TRANSFORM': 
      return {...states, textToTransform: payload}
    case 'MODIFY_INSTRUCTIONS': 
      return {...states, instructions: payload}
    case 'MODIFY_TEXT_TRANSFORMED': 
      return {...states, textTransformed: payload}
  }
}

export default function Home() {

  const t = useTranslations()

  const [loading, setLoading] = useState<boolean>(false)
  const [state, dispatch] = useReducer(reducer, { 
    textToTransform: '', 
    instructions: '', 
    textTransformed: '' 
  })

  const handleChangeTextToTransform = (e: ChangeEvent<HTMLTextAreaElement>) => {
    dispatch({
      type: 'MODIFY_TEXT_TO_TRANSFORM', 
      payload: e.target.value
    })
  }

  const handleChangeInstructions = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({
      type: 'MODIFY_INSTRUCTIONS', 
      payload: e.target.value
    })
  }

  const handleTransformText = async () => {
    setLoading(true)
    const response = await fetch('/api/transformText', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({
        input: state.textToTransform, 
        instruction: state.instructions
      })
    })

    const { textTransformed } = await response.json()
    dispatch({
      type: 'MODIFY_TEXT_TRANSFORMED', 
      payload: textTransformed
    })
    setLoading(false)
  }

  return (
    <div className={styles.layout}>
      <Head>
        <title>Make Text Easy</title>
        <meta name="description" content="A website to modify text easily" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section className={styles.inputsWrapper}>
        <section className={styles.textAreaWrapper}>
          <TextArea placeholder='lorem ipsum dolor sit amet, consectetur adipiscing elit' title={t('textToTransform')} value={state.textToTransform} setValue={handleChangeTextToTransform} />
          <TextArea placeholder='LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT' title={t('textTransformed')} value={state.textTransformed} readOnly />
        </section>
        <section className={styles.instructionsWrapper}>
          <Input title={t('instructions')} placeholder={t('instructionsPlaceholder')} value={state.instructions} setValue={handleChangeInstructions} />
        </section>
      </section>
      <section className={styles.buttonWrapper}>
        {loading ? 
          <span className={styles.loading}>{t('loading')}</span> 
          : 
          <Button disabled={state.instructions === '' || state.textToTransform === ''} onClick={handleTransformText}>
            {t('transformText')}
            <RightArrow />
          </Button>}
      </section>
    </div>
  )
}

export async function getStaticProps( {locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}.json`)).default
    }
  }
}