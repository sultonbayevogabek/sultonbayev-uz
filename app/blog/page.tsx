import { blogPosts } from "@/lib/data"
import { BlogCard } from "@/components/blog-card"

export const metadata = {
  title: "Blog | Frontend Developer",
  description: "Articles and insights on frontend development, design, and web technologies",
}

export default function BlogPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            My <span className="gradient-text">Blog</span>
          </h1>
          <p className="text-muted-foreground max-w-[700px] md:text-lg">
            Thoughts, tutorials, and insights on frontend development, design trends, and web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </div>
  )
}
