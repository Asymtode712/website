import React from 'react';
import Head from 'next/head';
import StyledMarkdown from '~/components/StyledMarkdown';
import { getLayout } from '~/components/Sidebar';
import getStaticMarkdownPaths from '~/lib/getStaticMarkdownPaths';
import getStaticMarkdownProps from '~/lib/getStaticMarkdownProps';
import { Headline1 } from '~/components/Headlines';
import { DocsHelp } from '~/components/DocsHelp';
import { SectionContext } from '~/context';

interface StaticPropsArgs {
  params: {
    slug: string;
  };
}

interface Frontmatter {
  title: string;
  section?:
    | 'learn'
    | 'docs'
    | 'implementers'
    | 'tools'
    | 'implementations'
    | 'blog'
    | 'community'
    | 'specification'
    | 'overview'
    | 'getting-started'
    | 'reference'
    | null;
}

interface StaticMarkdownPageProps {
  frontmatter: Frontmatter;
  content: string;
}

export async function getStaticPaths() {
  return getStaticMarkdownPaths('pages/understanding-json-schema');
}

export async function getStaticProps(args: StaticPropsArgs) {
  return getStaticMarkdownProps(args, 'pages/understanding-json-schema');
}

export default function StaticMarkdownPage({
  frontmatter,
  content,
}: StaticMarkdownPageProps) {
  const markdownFile = '_index';
  const newTitle = `JSON Schema - ${frontmatter.title}`;

  return (
    <SectionContext.Provider value={frontmatter.section || null}>
      <Head>
        <title>{newTitle}</title>
      </Head>
      <Headline1>{frontmatter.title || 'NO TITLE!'}</Headline1>
      <StyledMarkdown markdown={content} />
      <DocsHelp markdownFile={markdownFile} />
    </SectionContext.Provider>
  );
}

StaticMarkdownPage.getLayout = getLayout;
