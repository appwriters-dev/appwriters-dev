<script>
	import { siteLink } from "$lib/config";

    let metaDescription = 'Starter template for your next Flutter project with Appwrite, riverpod and go_router.';
    let title = 'Flutter Appwrite starter';
    let metaKeywords = 'flutter, appwrite, riverpod, go_router, starter, template, flutter template, flutter appwrite';
    let repoUrl = 'https://github.com/lohanidamodar/flutter_appwrite_starter';
	let thumbnail = '/images/flutter-appwrite-starter-thumbnail.png';
</script>
<svelte:head>
	<title>{title}</title>
	<meta name="description" content={metaDescription} />
	<meta name="keywords" content={metaKeywords} />
	<meta name="author" content="Damodar Lohani" />
	<meta name="robots" content="index, follow" />
	<meta property="og:title" content={title} />
	<meta property="og:image" content="{siteLink}{thumbnail}" />
	<meta property="og:description" content={metaDescription} />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={metaDescription} />
</svelte:head>

<h1>{title}</h1>

<p>
	Building your next project with <a href="https://flutter.dev" target="_blank">Flutter</a> and
	<a href="https://appwrite.io" target="_blank">Appwrite</a>? Then this is the template for you to get started.
</p>

<img src="{thumbnail}" alt="Flutter Appwrite starter" />

<p>
	Go directly to <a href="{repoUrl}" target="_blank"
		>repository</a
	>: <br />
	<a href="{repoUrl}" target="_blank"
		>{repoUrl}</a
	>
</p>

<h2>Features</h2>

Below features are already configured in this template:

<ul>
	<li>Authentication (with Email/password)</li>
	<li>State management with <a href="https://riverpod.dev" target="_blank">riverpod</a></li>
	<li>Dependency injection using <a href="https://pub.dev/packages/get_it" target="_blank">get_it</a></li>
	<li>Localization ready</li>
	<li>Google fonts</li>
	<li>Image picker and cropper</li>
	<li>User profile with profile image using Appwrite storage</li>
	<li>
		Navigation with <a href="https://pub.dev/packages/go_router" target="_blank">go router</a> and riverpod
	</li>
	<li>Handling of authenticated and public routes</li>
	<li>Feature first folder organization</li>
	<li>One time only intro page using Appwrite user preferences</li>
</ul>

<h2>Using the template</h2>

<p>
	If you are using Appwrite <a href="https://cloud.appwrite.io" target="_blank">cloud</a> or
	Appwrite version 1.4.x then you should use the
	<a href="{repoUrl}/tree/appwrite-1.5.x">main</a> branch
	of this template.
</p>

<p>
	If you are looking to use Appwrite 1.5.x, please check the <a
		href="{repoUrl}/tree/appwrite-1.5.x"
		>appwrite-1.5.x</a
	> branch.
</p>

<ol>
	<li>
		Clone this repository locally or Fork using this <a
			href="https://github.com/new?template_name=flutter_appwrite_starter&template_owner=lohanidamodar"
			target="_blank">link</a
		>
		or using the <strong>use this template</strong> button in the GitHub.
	</li>
	<li>Delete <code>.git</code> folder to clear git history (or you can keep it if you want)</li>
	<li>
		Using <code>rename</code> package change the bundle ID and app name to whatever you want your
		<code>dart run rename --bundleId com.new.package.name</code>
		and <code>dart run rename --appname &quot;New App Name&quot;</code>. Check
		<a href="https://pub.dev/packages/rename" target="_blank">rename</a> package for more details on
		how to use it.
	</li>
	<li>
		in <code>lib/res/constants.dart</code> update endpoint and project id with your own endpoint and
		project id details;
	</li>
</ol>

<p>If you have any queries or issues, feel free to raise <a href="https://github.com/lohanidamodar/flutter_appwrite_starter/issues" target="_blank">issue in the repository</a>.</p>
