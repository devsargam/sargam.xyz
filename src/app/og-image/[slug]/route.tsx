import { getAllBlogPosts } from '@/utils/get-blog-posts';
import { ImageResponse } from 'next/og';

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function GET(
  _request: Request,
  props: { params: Promise<{ slug: string }> }
) {
  const params = await props.params;
  try {
    const { slug } = params;

    return new ImageResponse(
      (
        <section
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundImage:
              'radial-gradient(circle at 15% 15%, rgba(71, 85, 105, 0.3) 0%, transparent 30%), ' +
              'radial-gradient(circle at 85% 80%, rgba(71, 85, 105, 0.3) 0%, transparent 30%), ' +
              'radial-gradient(circle at 50% 50%, rgba(71, 85, 105, 0.2) 0%, transparent 25%), ' +
              'radial-gradient(circle at 20% 80%, rgba(71, 85, 105, 0.25) 0%, transparent 20%), ' +
              'radial-gradient(circle at 75% 25%, rgba(71, 85, 105, 0.25) 0%, transparent 20%), ' +
              'linear-gradient(to bottom right, #0f172a, #1e293b)',
            border: '10px solid #334155',
            boxSizing: 'border-box',
            borderRadius: '20px',
            position: 'relative',
          }}
        >
          <h1
            style={{
              textTransform: 'capitalize',
              textAlign: 'center',
              fontSize: 85,
              color: 'white',
              letterSpacing: '-0.02em',
              lineHeight: 1.1,
              padding: '0 40px',
              marginBottom: '20px',
              textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
            }}
          >
            {slug}
          </h1>
          <p
            style={{
              textAlign: 'center',
              fontSize: 35,
              color: '#94a3b8',
            }}
          >
            sarg.am
          </p>
        </section>
      )
    );
  } catch (reason) {
    return new ImageResponse(<div>Hello</div>);
  }
}
