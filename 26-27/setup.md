# Rocq development setup

In order to solve the exercises you need to set up [Rocq](https://rocq-prover.org/)
(preferably in an IDE). For that, you are free to configure your favorite editor,
package manager and build tool chain if there exist a Rocq plugin for it.
However, by doing so you are on your own.

If you expect us to help you with this setup, then you should follow our recommendation:
Use nix as package manager and VsCode with the VsRocq plugin as editor.

## Nix Setup

To install nix you should follow the official tutorial. (see https://nixos.org/download/)

Then you should enable the nix flakes feature by writing the following to `~/.config/nix/nix.conf`:

```ini
experimental-features = nix-command flakes
```

Just create the file in case it doesn't exist. (see https://nixos.wiki/wiki/flakes)

## Clone Exercise Repo

Next you should clone this repository, by calling the following command:

```bash
git clone https://gitlab.barkhauseninstitut.org/versa/teaching/fcplcd-2026
```

In case you do not have git installed you can use git through nix by replacing `git` with `nix run nixpkgs#git`.

After you cloned it, go into the repo:

```bash
cd fcplcd-2026
```

## Enter the Nix Environment

Once nix is set up, and you are in the directory of the cloned repository, you simply call `nix develop`
to enter a development shell which will have the necessary binaries available, like `coqc` or `vscoqtop`.

In that environment you need to start VsCode/Codium. It is important that you start it from the shell s.t. it
has access to the coq binaries: do not invoke it using your normal program launcher!

Depending on your installation of VsCode the shell command may differ, I'd assume it is named `code` or `codium`.
If you pass it a `.` as first argument it will directly load the current directory as a project, so I recommend calling `code .` or `codium .`.

## VsRocq

Inside VsCode you then need to install the 'VsRocq' extension. (Note: not 'VsCoq' and also not 'VsCoq Legacy')
After you installed this plugin, everything should work out of the box. You can verify it by going into
one of the exercise files and 'stepping' through them by using `alt` + arrow keys `→` / `↑` / `↓`.

In case you have problems, please reach out via E-Mail to fcplcd@barkhauseninstitut.org.
