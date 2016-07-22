import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Link, LinkList } from '../src';
import { htmlLinks, reactRouterLinks, disabledLinks } from './data';
import '../src/index.scss';
import './index.scss';

const linkGroups = () => {
  return (
    <div>
      <div className='link-Group'>
        <h1>HTML Links</h1>
        <h2>A single html link</h2>
        <Link {...htmlLinks.single}
          customclass={'sui-Link-customclass'}
          url={'http://google.com'} />
        <h2>An html link with click</h2>
        <Link {...htmlLinks.withClick}
          url={'#'} />
        <h2>A list of html links</h2>
        <LinkList list={htmlLinks.list} />
        <h2>An inline list of html links</h2>
        <LinkList list={htmlLinks.inlineList}
          displayInline />
      </div>

      <div className='link-Group'>
        <h1>React Router Links</h1>
        <h2>A single react router link</h2>
        <Link {...reactRouterLinks.single}
          customclass={'sui-Link-customclass'}
          url={'/foo'}
          useReactRouterLinks={true} />
        <h2>A react router link with click</h2>
        <Link {...reactRouterLinks.withClick}
          useReactRouterLinks={true}
          url={'#'} />
        <h2>A list of react router links</h2>
        <LinkList list={reactRouterLinks.list}
          useReactRouterLinks={true} />
        <h2>An inline list of react router links</h2>
        <LinkList list={reactRouterLinks.inlineList}
          displayInline
          useReactRouterLinks={true} />
      </div>

      <div className='link-Group'>
        <h1>Disabled Links</h1>
        <h2>A single disabled link</h2>
        <Link {...disabledLinks.single}
          customclass={'sui-Link-customclass'}
          url={'http://google.com'}
          disabled />
        <h2>A disabled link with click</h2>
        <Link {...disabledLinks.withClick}
          customclass={'sui-Link-disabled'}
          disabled
          url={'#'} />
        <h2>A list of disabled links</h2>
        <LinkList list={disabledLinks.list} />
        <h2>An inline list of disabled links</h2>
        <LinkList list={disabledLinks.inlineList}
          displayInline />
      </div>
    </div>
  );
};

const onRouterUpdate = () => window.scrollTo(0, 0);

ReactDom.render(
  <Router onUpdate={onRouterUpdate} history={createBrowserHistory()}>
    <Redirect from='/' to='/links' />
    <Route path='/links' component={linkGroups} />
    <Route path='/foo' component={linkGroups} />
    <Route path='/test' component={linkGroups} />
  </Router>,
  document.getElementById('main')
);
