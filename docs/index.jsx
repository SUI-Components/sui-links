import React from 'react';
import ReactDom from 'react-dom';
import { Router, Route, Redirect } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Link, LinkList } from '../src';
import { htmlLinks, reactRouterLinks, disabledLinks } from './data';
import { Britishpound, Bold, Dollar, Euro } from '@schibstedspain/sui-svgiconset';
import '../src/index.scss';
import './index.scss';

const linkGroups = () => {
  return (
    <div>
      <div className='link-Group'>
        <h1>SUI Link and Linklist Components</h1>
        <h2>Currencies Links with SVG icons</h2>
        <ul>
          <li>
            <Link {...htmlLinks.bitcoin}
              className={'sui-Link-customclass'}
              icon={<Britishpound size={16} svgClass='MySVGicon'/>} />
          </li>
          <li>
            <Link {...htmlLinks.pound}
              className={'sui-Link-customclass'}
              icon={<Bold size={16} svgClass='MySVGicon'/>} />
          </li>
          <li>
            <Link {...htmlLinks.dollar}
              className={'sui-Link-customclass'}
              icon={<Dollar size={16} svgClass='MySVGicon'/>} />
          </li>
          <li>
            <Link {...htmlLinks.euro}
              className={'sui-Link-customclass'}
              icon={<Euro size={16} svgClass='MySVGicon'/>} />
          </li>
        </ul>

        <h2>An html link with click</h2>
        <Link {...htmlLinks.withClick} url={'#'} />
        <Link {...htmlLinks.single} />
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
          className={'sui-Link-customclass'}
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
          className={'sui-Link-customclass'}
          url={'http://google.com'}
          disabled />
        <h2>A disabled link with click</h2>
        <Link {...disabledLinks.withClick}
          className={'sui-Link-disabled'}
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
