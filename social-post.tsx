"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import {
  ArrowBigDown,
  ArrowBigUp,
  Clock,
  Copy,
  Facebook,
  MapPin,
  MessageSquare,
  Send,
  Share2,
  Timer,
} from "lucide-react"
import Image from "next/image"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"

interface Comment {
  id: string
  username: string
  avatar: string
  content: string
  timestamp: Date
}

interface PostProps {
  id: string
  username: string
  avatar: string
  title: string
  description: string
  location?: string
  hangoutTime?: Date
  openToHangout: boolean
  hangoutTimer?: Date
  image?: string
  timestamp: Date
  comments: Comment[]
  upvotes: number
  downvotes: number
}

export default function SocialPost({
  id = "1",
  username = "johndoe",
  avatar = "/placeholder.svg?height=40&width=40",
  title = "Coffee meetup downtown",
  description = "Looking for people to join me for coffee and conversation at the new café that just opened.",
  location = "Central Park Coffee, 123 Main St",
  hangoutTime = new Date(Date.now() + 3600000), // 1 hour from now
  openToHangout = true,
  hangoutTimer = new Date(Date.now() + 7200000), // 2 hours from now
  image = "/placeholder.svg?height=400&width=600",
  timestamp = new Date(),
  comments = [
    {
      id: "1",
      username: "alice",
      avatar: "/placeholder.svg?height=30&width=30",
      content: "I might join! Is the place pet-friendly?",
      timestamp: new Date(Date.now() - 1800000), // 30 minutes ago
    },
    {
      id: "2",
      username: "bob",
      avatar: "/placeholder.svg?height=30&width=30",
      content: "Sounds fun! I'll be there around 3pm.",
      timestamp: new Date(Date.now() - 900000), // 15 minutes ago
    },
  ],
  upvotes = 24,
  downvotes = 3,
}: Partial<PostProps>)

{
  const [newComment, setNewComment] = useState("")
  const [voteCount, setVoteCount] = useState(upvotes - downvotes)
  const [userVote, setUserVote] = useState<"up" | "down" | null>(null)
  const [showNewPostDialog, setShowNewPostDialog] = useState(false)
  const [allComments, setAllComments] = useState<Comment[]>(comments)

  const handleUpvote = () => {
    if (userVote === "up") {
      setVoteCount(voteCount - 1)
      setUserVote(null)
    } else {
      setVoteCount(userVote === "down" ? voteCount + 2 : voteCount + 1)
      setUserVote("up")
    }
  }

  const handleDownvote = () => {
    if (userVote === "down") {
      setVoteCount(voteCount + 1)
      setUserVote(null)
    } else {
      setVoteCount(userVote === "up" ? voteCount - 2 : voteCount - 1)
      setUserVote("down")
    }
  }

  const handleCommentSubmit = () => {
    if (newComment.trim()) {
      const comment: Comment = {
        id: `comment-${Date.now()}`,
        username: "currentuser",
        avatar: "/placeholder.svg?height=30&width=30",
        content: newComment,
        timestamp: new Date(),
      }
      setAllComments([...allComments, comment])
      setNewComment("")
    }
  }

  const copyLink = () => {
    navigator.clipboard.writeText(`https://example.com/post/${id}`)
  }

  const timeRemaining = hangoutTimer ? formatDistanceToNow(hangoutTimer, { addSuffix: true }) : ""
  const postTime = formatDistanceToNow(timestamp, { addSuffix: true })

  return (
    <div className="w-full max-w-2xl mx-auto">
      {/* Create New Post Dialog */}
      <Dialog open={showNewPostDialog} onOpenChange={setShowNewPostDialog}>
        <DialogTrigger asChild>
          <Button className="mb-4 w-full">Create New Post</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>Create a new post</DialogTitle>
            <DialogDescription>Share what's on your mind or plan a hangout</DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid gap-2">
              <Label htmlFor="title">Title</Label>
              <Input id="title" placeholder="Give your post a title" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" placeholder="What's on your mind?" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="location">Location (optional)</Label>
              <Input id="location" placeholder="Where are you or where do you want to meet?" />
            </div>
            <div className="flex items-center gap-2">
              <Checkbox id="hangout" />
              <Label htmlFor="hangout">Open to hangout</Label>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="hangoutTime">Hangout time (if applicable)</Label>
              <Input id="hangoutTime" type="datetime-local" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="image">Image (optional)</Label>
              <Input id="image" type="file" />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Post</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Post Card */}
      <Card className="mb-6">
        <CardHeader className="flex flex-row items-center gap-3 pb-2">
          <Avatar>
            <AvatarImage src={avatar} alt={username} />
            <AvatarFallback>{username.slice(0, 2).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="flex flex-col">
            <span className="font-semibold">@{username}</span>
            <span className="text-xs text-muted-foreground">{postTime}</span>
          </div>
          {openToHangout && (
            <Badge variant="outline" className="ml-auto flex items-center gap-1">
              <Timer className="h-3 w-3" />
              <span>Open to hangout {timeRemaining}</span>
            </Badge>
          )}
        </CardHeader>
        <CardContent className="pb-2">
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="mb-3">{description}</p>

          {location && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <MapPin className="h-4 w-4" />
              <span>{location}</span>
            </div>
          )}

          {hangoutTime && (
            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-3">
              <Clock className="h-4 w-4" />
              <span>
                {hangoutTime.toLocaleDateString()} at{" "}
                {hangoutTime.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </span>
            </div>
          )}

          {image && (
            <div className="mt-3 rounded-md overflow-hidden">
              <Image
                src={image || "/placeholder.svg"}
                alt="Post image"
                width={600}
                height={400}
                className="w-full object-cover"
              />
            </div>
          )}
        </CardContent>

        <CardFooter className="flex flex-col pt-0">
          <div className="flex items-center justify-between w-full py-2">
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={handleUpvote}
                className={userVote === "up" ? "text-green-500" : ""}
              >
                <ArrowBigUp className="h-5 w-5" />
              </Button>
              <span className="font-medium">{voteCount}</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleDownvote}
                className={userVote === "down" ? "text-red-500" : ""}
              >
                <ArrowBigDown className="h-5 w-5" />
              </Button>
            </div>

            <Button variant="ghost" size="sm" className="gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{allComments.length} Comments</span>
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="gap-1">
                  <Share2 className="h-4 w-4" />
                  <span>Share</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={copyLink} className="gap-2">
                  <Copy className="h-4 w-4" />
                  <span>Copy link</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Facebook className="h-4 w-4" />
                  <span>Share to Facebook</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="gap-2">
                  <Send className="h-4 w-4" />
                  <span>Share to Hangout</span>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <Separator className="my-2" />

          {/* Comments Section */}
          <div className="w-full space-y-3">
            {allComments.map((comment) => (
              <div key={comment.id} className="flex gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={comment.avatar} alt={comment.username} />
                  <AvatarFallback>{comment.username.slice(0, 2).toUpperCase()}</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">@{comment.username}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatDistanceToNow(comment.timestamp, { addSuffix: true })}
                    </span>
                  </div>
                  <p className="text-sm">{comment.content}</p>
                </div>
              </div>
            ))}

            {/* Add Comment */}
            <div className="flex gap-2 pt-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="/placeholder.svg?height=30&width=30" alt="You" />
                <AvatarFallback>YO</AvatarFallback>
              </Avatar>
              <div className="flex-1 flex gap-2">
                <Input
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault()
                      handleCommentSubmit()
                    }
                  }}
                />
                <Button size="icon" onClick={handleCommentSubmit}>
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

