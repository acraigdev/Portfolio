import React, { useRef, useState } from 'react';
import * as emailjs from '@emailjs/browser';
import { ContentBox } from '../../components/ContentBox';
import { TextInput } from '../../components/TextInput';
import { Button } from '../../components/Button';
import { Icons } from '../../components/Icons';
import { SpaceBetween } from '../../components/SpaceBetween';
import { analytics } from '../../utils/analytics';
import { ValidationDelegate } from '../../utils/typeHelpers';
import {
  EMAIL_PATTERN,
  MESSAGE_PATTERN,
  NAME_PATTERN,
} from '../../utils/regexPatterns';
import { LayoutFrame } from '../../components/LayoutFrame';

interface ContactProps {}

const SendState = {
  init: 'init',
  sent: 'send',
  error: 'error',
} as const;

type SendState = (typeof SendState)[keyof typeof SendState];

export function Contact({}: ContactProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sendState, setSendState] = useState<SendState>(SendState.init);

  const nameDelegate = useRef<ValidationDelegate>(null);
  const emailDelegate = useRef<ValidationDelegate>(null);
  const messageDelegate = useRef<ValidationDelegate>(null);

  /**
   * TODO:
   * sanitize? emailjs might do this
   *
   * Published routes don't work on refresh
   */

  const sendEmail = () => {
    setSendState(SendState.init);
    const isValid = [
      nameDelegate.current?.validate,
      emailDelegate.current?.validate,
      messageDelegate?.current?.validate,
    ].reduce(
      (isValid, validate) =>
        (validate?.({ shouldFocus: isValid }) ?? true) && isValid,
      true,
    );
    if (!isValid) return;
    emailjs
      .send(
        'service_h1ayp8y',
        'template_usq8qvl',
        {
          contact_name: name,
          message: message,
          contact_email: email,
        },
        {
          publicKey: 'J-CCYCdlaQkhjZ0CI',
        },
      )
      .then(
        () => {
          setName('');
          setEmail('');
          setMessage('');
          setSendState(SendState.sent);
        },
        err => {
          setSendState(SendState.error);
          analytics.logError({ action: 'send-message', label: String(err) });
        },
      );
  };
  return (
    <LayoutFrame>
      <ContentBox>
        <h1 className="mb-3">Contact</h1>
        <p>
          Want to talk more? I'd love to hear from you! Reach out below or
          contact me directly and I'll be in contact as soon as possible!
        </p>
        <SpaceBetween
          direction="horizontal"
          size="sm"
          className="mb-6"
          alignOverride="items-center"
        >
          <Icons.Envelope className="size-6 inline-block" />
          <a className="link" href="mailto:alexandriamcraig@gmail.com">
            <span>alexandriamcraig@gmail.com</span>
          </a>
        </SpaceBetween>
        {sendState !== SendState.sent && (
          <form id="contact-form">
            <div className="grid gap-2 mb-2 md:grid-cols-2 md:gap-6 md:mb-6">
              <TextInput
                label="Name"
                val={name}
                onValChange={val => setName(val)}
                validationDelegate={nameDelegate}
                validation={val =>
                  Boolean(val !== '' && val?.match(NAME_PATTERN))
                }
                validationError={'Enter your name.'}
              />
              <TextInput
                label="Email"
                val={email}
                onValChange={val => setEmail(val)}
                validationDelegate={emailDelegate}
                validation={val =>
                  Boolean(val !== '' && val?.match(EMAIL_PATTERN))
                }
                validationError={'Enter a valid email.'}
              />
            </div>
            <TextInput
              type="textarea"
              label="Message"
              val={message}
              onValChange={val => setMessage(val)}
              validationDelegate={messageDelegate}
              validation={val => {
                return Boolean(val !== '' && val?.match(MESSAGE_PATTERN));
              }}
              validationError={'Enter a message.'}
              classes="mb-8"
            />
            <Button onClick={sendEmail} label="Send" />
          </form>
        )}
        {sendState === SendState.sent && (
          <SpaceBetween
            direction="horizontal"
            size="sm"
            className="text-green-700 w-full"
          >
            <Icons.CheckCircle className="size-6 md:size-8 inline-block" />
            <p>Thank you! Your message was sent successfully.</p>
          </SpaceBetween>
        )}
        {sendState === SendState.error && (
          <SpaceBetween
            direction="horizontal"
            size="sm"
            className="text-red-700 w-full mt-4"
          >
            <Icons.Error className="size-6 md:size-8 inline-block" />
            <p>
              Something went wrong sending the message. Please try again or
              contact directly.
            </p>
          </SpaceBetween>
        )}
      </ContentBox>
    </LayoutFrame>
  );
}
